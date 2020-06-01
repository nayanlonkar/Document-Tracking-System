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
    file_name       CHAR(25)    NOT NULL,
    doc_type        CHAR(25)    NOT NULL,
    user_id         INT    NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_details(id)
) ENGINE = INNODB CHARACTER SET=utf8;

CREATE TABLE IF NOT EXISTS userFiles (
    id              INT         AUTO_INCREMENT  PRIMARY KEY,
    file_id         INT         NOT NULL,
    sender          INT         NOT NULL, 
    receier         INT         NOT NULL,
    is_received     INT         DEFAULT 0,
    FOREIGN KEY (file_id) REFERENCES files(id),
    FOREIGN KEY (sender) REFERENCES user_details(id),
    FOREIGN KEY (receier) REFERENCES user_details(id)
) ENGINE = INNODB CHARACTER SET=utf8;
