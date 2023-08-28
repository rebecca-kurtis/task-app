-- DROP and CREATE projects TABLE
DROP TABLE IF EXISTS projects CASCADE;

-- CREATE TABLE projects (
-- project_id SERIAL PRIMARY KEY NOT NULL,
-- title VARCHAR(255) NOT NULL,
-- description VARCHAR NOT NULL,
-- FOREIGN KEY(user_id) REFERENCES users,
-- created_at TIMESTAMP NOT NULL DEFAULT NOW()
-- );