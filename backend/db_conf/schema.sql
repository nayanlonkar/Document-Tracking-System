USE DTS;

CREATE TABLE IF NOT EXISTS user_details (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    first_name  CHAR(25)    NOT NULL,
    last_name   CHAR(25)    NOT NULL,
    username    CHAR(25)    UNIQUE KEY  NOT NULL,
    password    VARBINARY(128)  NOT NULL,
    creation_date   DATETIME    DEFAULT CURRENT_TIMESTAMP
) ENGINE = INNODB CHARACTER SET=utf8;