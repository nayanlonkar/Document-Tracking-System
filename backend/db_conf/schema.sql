USE DTS;

CREATE TABLE IF NOT EXISTS user_details (
    id              INT             AUTO_INCREMENT  PRIMARY KEY,
    first_name      CHAR(25)        NOT NULL,
    last_name       CHAR(25)        NOT NULL,
    username        CHAR(25)        UNIQUE KEY      NOT NULL,
    password        CHAR(128)       NOT NULL,
    creation_date   DATETIME        DEFAULT CURRENT_TIMESTAMP
) ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS files (
    id              INT         AUTO_INCREMENT PRIMARY KEY,
    file_name       CHAR(50)    NOT NULL,
    doc_type        CHAR(25)    NOT NULL,
    username        CHAR(25)    NOT NULL
) ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS userFiles (
    id              INT         AUTO_INCREMENT  PRIMARY KEY,
    file_name       CHAR(50)    NOT NULL,
    sender          CHAR(25)    NOT NULL, 
    receier         CHAR(25)    NOT NULL,
    is_received     INT         DEFAULT 0
) ENGINE = INNODB CHARACTER SET=utf8;
