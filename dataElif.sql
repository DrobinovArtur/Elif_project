drop database ElifTech;
create database ElifTech;
use ElifTech;

create table companies(id int auto_increment primary key, name_company varchar(25), company_earnings double);

create table child_companies(id int auto_increment primary key, name_child_company varchar(25), child_earnings double, id_company int);

alter table child_companies add constraint fk1 foreign key(id_company) references companies(id)  ON DELETE CASCADE;


insert into companies(name_company,company_earnings) value('Google',3500000);
insert into companies(name_company,company_earnings) value('Microsoft',2000000);
insert into companies(name_company,company_earnings) value('Facebook',4000000);


insert into child_companies(name_child_company,child_earnings ,id_company) value('AngularJS',300000,1);
insert into child_companies(name_child_company,child_earnings ,id_company) value('Angular2',500000,1);
insert into child_companies(name_child_company,child_earnings ,id_company) value('React',500000,3);
insert into child_companies(name_child_company,child_earnings ,id_company) value('Explore',1000,2);


