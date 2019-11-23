DROP DATABASE IF EXISTS rentalbookstore;
CREATE DATABASE rentalbookstore;

USE rentalbookstore;

CREATE TABLE Owner
(
	ownerid INT NOT NULL AUTO_INCREMENT,
	fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(80) NOT NULL,
  state VARCHAR(80) NOT NULL,
  zip VARCHAR(40) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(20),
    prodctid INT NOT NULL,
	PRIMARY KEY (ownerid)
);

CREATE TABLE addproduct
( 
    prodctid INT NOT NULL AUTO_INCREMENT,
	  pname VARCHAR(255) NOT NULL,
    pdescription VARCHAR(255) NOT NULL,
    pimage TEXT NOT NULL,
    pcategory VARCHAR(100)   
    blockeddate DATE,
    custid INT,
	PRIMARY KEY (prodctidd)
)

CREATE TABLE customer
(
    custid INT NOT NULL AUTO_INCREMENT,
    ownerid INT,
    cfname VARCHAR(50) NOT NULL,
    clname VARCHAR(50) NOT NULL,
    caddress VARCHAR(255) NOT NULL,
    ccity VARCHAR(80) NOT NULL,
    cstate VARCHAR(80) NOT NULL,
    czip VARCHAR(40) NOT NULL,
    cemail VARCHAR(255) NOT NULL,
    cpassword VARCHAR(20),
    PRIMARY KEY (custidd)
)
