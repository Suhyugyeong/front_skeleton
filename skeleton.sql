create table if not exists user (
id int not null auto_increment, 
name varchar(50) not null,
email varchar(50) not null,
password varchar(200) not null,
createAt datetime null default now(),
primary key (id)
);

create table if not exists board(
	 id int not null auto_increment,
     name varchar(100) not null,
     title varchar(100) not null,
     content varchar(1024) not null,
     cnt int null default 0,
     createAt datetime null default now(),
     primary key(id)
     
);
insert into board (name, title, content) values ('홍길동','첫번째 게시물','첫번째 내용입니다...');
insert into board (name, title, content) values ('김길동','두번째 게시물','두번째 내용입니다...');
insert into board (name, title, content) values ('정길동','세번째 게시물','세번째 내용입니다...');

select * from board;