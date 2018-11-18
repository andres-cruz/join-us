
-- This table is for a demo app only. It's not intended for a production environment. 
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);



