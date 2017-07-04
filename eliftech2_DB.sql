create database ElifTech2;
use ElifTech2;

create table companies(id int auto_increment primary key, company_name varchar(25), company_earning double, company_earnings double, parent_id int);



insert into companies(company_name,company_earning,company_earnings,parent_id) value('Google',3500000,0,0);
insert into companies(company_name,company_earning,company_earnings,parent_id) value('Microsoft',2000000,0,0);
insert into companies(company_name,company_earning,company_earnings,parent_id) value('Facebook',4000000,0,0);


