DROP DATABASE IF EXISTS rosesignals;
CREATE DATABASE IF NOT EXISTS rosesignals;
USE rosesignals;

CREATE TABLE user(
	id_user CHAR(32) UNIQUE PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    name VARCHAR(255),
    genre CHAR(1),
    birth_date DATE,
    address MEDIUMTEXT,
    image VARCHAR(255),
    permission VARCHAR(50) DEFAULT 'membro',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE topic(
	id_topic INTEGER AUTO_INCREMENT PRIMARY KEY,
    title LONGTEXT NOT NULL,
    description LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id CHAR(32),
    FOREIGN KEY(user_id) REFERENCES user(id_user) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE like_topic(
	id_like_topic INTEGER AUTO_INCREMENT PRIMARY KEY,
    topic_id INTEGER,
    FOREIGN KEY(topic_id) REFERENCES topic(id_topic) ON DELETE CASCADE ON UPDATE CASCADE,
    user_id CHAR(32),
    FOREIGN KEY(user_id) REFERENCES user(id_user) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * FROM user;
SELECT * FROM topic;
SELECT * FROM like_topic;