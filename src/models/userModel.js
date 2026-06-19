import pool from "../config/db.js";

export const getAllUsersService = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  } finally {
    client.release();
  }
};

export const getUserByIdService = async (id) => {
 const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  } finally {
    client.release();
  }

}
export const createUserService = async (name,email) => {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
}
export const updateUserService = async (id, name, email) => {
    const client = await pool.connect();
    try {
      const result = await client.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
        [name, email, id]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
}
export const deleteUserService = async (id) => {
    const client = await pool.connect();
    try {
      const result = await client.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
      return result.rows[0];
    } finally {
      client.release();
    }
}