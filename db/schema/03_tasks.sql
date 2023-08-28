-- DROP and CREATE tasks TABLE
DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks (
task_id SERIAL PRIMARY KEY NOT NULL,
title VARCHAR(255) NOT NULL,
description VARCHAR NOT NULL,
priority_level VARCHAR(255) NOT NULL,
project_id INT,
FOREIGN KEY(project_id) REFERENCES projects,
user_id INT,
FOREIGN KEY(user_id) REFERENCES users,
created_at TIMESTAMP NOT NULL DEFAULT NOW()
);  


