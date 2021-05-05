import pool from "../../../database";
import { errorHandling } from "../utils/errorHandling";

export const getAllUsers = async (req, res) => {
  try {
    const users = await pool.query("Select * from customers");
    console.warn("/users API called");
    console.table(users.rows);
    return res.status(200).json(users.rows);
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const users = await pool.query(
      "Select * from customers where customer_id=($1)",
      [userId]
    );
    console.warn("/users API called");
    console.table(users.rows);

    if (users) {
      return res.status(200).json(users.rows);
    }
    return res
      .status(404)
      .json(errorHandling("User with the specified ID does not exists"));
  } catch (error) {
    return res.status(500).json(errorHandling(error.message));
  }
};

export const createUser = async (req, res) => {
  try {
    const { userId, companyName } = req.body;
    pool.query("begin");
    await pool.query(
      "Insert into customers (customer_id,company_name) Values ($1,$2)",
      [userId, companyName]
    );
    pool.query("commit");
    return res.status(201).json(` Customer ${userId} succesfully created`);
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { companyName } = req.body;
    pool.query("begin");
    const updated = await pool.query(
      "UPDATE customers SET company_name = ($1) where customer_id = ($2)",
      [companyName, userId]
    );
    if (updated) {
      pool.query("commit");
      return res.status(200).json("Updated Successfully");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    pool.query("begin");
    const deleted = await pool.query(
      "DELETE from customers where customer_id = ($1)",
      [userId]
    );
    if (deleted.rowCount.length) {
      pool.query("commit");
      return res.status(200).json("Deleted successfully");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).json({ error: errorHandling(error.message) });
  }
};
