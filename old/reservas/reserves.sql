CREATE TABLE customer
   (customer_email 		varchar(255)	NOT NULL UNIQUE,
   	customer_name 		varchar(255)	NOT NULL,
    customer_city 		varchar(255)	NOT NULL,
    customer_country 	varchar(255)	NOT NULL,
    PRIMARY KEY(customer_email));

CREATE TABLE room
   (room_id 		int	NOT NULL UNIQUE,
   	room_capacity	int NOT NULL,
    PRIMARY KEY(room_id));

CREATE TABLE reservation
   (reservation_begin 	date			NOT NULL,
   	reservation_end		date			NOT NULL,
   	customer_email 		varchar(255)	NOT NULL,
   	room_id 			int				NOT NULL,
   	PRIMARY KEY(customer_email, room_id),
    FOREIGN KEY(customer_email) REFERENCES customer(customer_email),
    FOREIGN KEY(room_id) REFERENCES room(room_id));

/* POPULATE DOMAIN */

insert into customer values ('miguel@mail.com', 'Miguel', 'Faro', 'Portugal');
insert into customer values ('vasco@mail.com', 'Vasco', 'Faro', 'Portugal');
insert into customer values ('eduarda@mail.com', 'Eduarda', 'Faro', 'Portugal');
insert into customer values ('margarida@mail.com', 'Margarida', 'Faro', 'Portugal');