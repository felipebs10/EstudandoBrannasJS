-- create schema financas_pessoais;
/* create table financas_pessoais.lancamento (
    id_lancamento serial primary key,
    mes text ,
    categoria text,
    tipo text,
    valor numeric
);*/ 

select * from financas_pessoais.lancamento;
select id_lancamento, mes, categoria from financas_pessoais.lancamento;
/*
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('janeiro', 'Salário','receita', 3000 );
	delete from financas_pessoais.lancamento where id_lancamento = ??
	*/
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('janeiro', 'Aluguel','despesa', 1000 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('janeiro', 'Conta de Luz','desepsa', 200 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('janeiro', 'Conta de Água','despesa', 100 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('janeiro', 'Transporte','despesa', 500);

/*Insert para inserir valores mes de fevereiro*/
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Salário','receita', 3000 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Aluguel','despesa', 1000 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Conta de Luz','desepsa', 200 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Conta de Água','despesa', 100 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Transporte','despesa', 500);

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('fevereiro', 'Alimentação','despesa', 500);

/*Insert para inserir valores mes de março*/
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('março', 'Salário','receita', 4000 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('março', 'Aluguel','despesa', 1000 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('março', 'Conta de Luz','desepsa', 200 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('março', 'Conta de Água','despesa', 100 );

insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('março', 'Transporte','despesa', 500);

/*Insert para inserir valores mes de abril */
insert into financas_pessoais.lancamento (mes, categoria, tipo, valor) 
    values ('abril', 'Salário','receita', 4000 );


select * from financas_pessoais.lancamento order by id_lancamento;

/* update financas_pessoais.lancamento set valor = 4000
where id_lancamento = 6;*/


/* 
--update financas_pessoais.lancamento set tipo = 'despesa' where tipo <> 'receita'; */

