import {React,useState} from "react";
import {useHistory} from "react-router-dom";

import {
  InputData,
  ButtonEstilizacao,
  ContainerForm,
  ContainerBotoes,
  DivInputForm,
  ContainerLabel
  } from "./styles";
  
const Register = ()=>{

const [form,setForm]=useState({
name:'',
date:"yyyy-MM-dd",
cpf:'',
cep:'',
Adress:'',
numAdress:''       
})

const [register,setRegister] = useState([])

const history = useHistory()

const goBack = ()=>{
history.push("/")
}

const onChangeInput = (e) => {
const newValue=(e.target.value);
const fieldName=e.target.name
setForm({...form, [fieldName]: newValue})
}
   
var formString = JSON.stringify(form)
function create_cookie(nome, valor) {
var todos_os_cookies = document.cookie;
var data = new Date(2022,10,10);
data = data.toGMTString();
valor = encodeURI(valor);
document.cookie = nome + '=' + valor + '; expires=' + data + '; path=/';
alert(todos_os_cookies)
}

const onSubmit = () => {
create_cookie('data',formString);
alert("Cadastro realizado com sucesso!")
}

const checkCep = (e) => {
  try {
   const result = JSON.parse(undefined);
  } catch (err) {
   console.log('Error: ', err.message);
  }
  const cep = e.target.value.replace(/\D/g, '');
  fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
  localStorage.setItem('endereco',JSON.stringify(data) )
  const Registro = JSON.parse(localStorage.getItem('endereco'))
  if(Registro){
  setRegister(Registro)
  }
 });
}
return (
  <ContainerForm> 
<DivInputForm>
<h2>Cadastre-se e obtenha todos os beneficios</h2>
<InputData
name={"nome"}
placeholder="Nome"    
onChange={onChangeInput}
 />
<InputData 
 name={"date"}
 placeholder="Data Nascimento: "
 onChange={onChangeInput}
 type="date"
/>
<InputData 
 name={"cpf"}
 type="text"
 placeholder="CPF: "
 onChange={onChangeInput}
/>
<InputData 
name={"cep"}
 placeholder="Insira o Cep: "
 onChange={checkCep}
 /> 
 <ContainerLabel>
<label>Logradouro:{register.logradouro}</label>
<label>Bairro: {register.bairro}</label>
<label>Estado:{register.uf}</label>
</ContainerLabel>
<InputData 
 name={"numAdress"}
 type="text"
 placeholder="Número do endereço: "
 onChange={onChangeInput}
/>
<ContainerBotoes>
<ButtonEstilizacao onClick={goBack}>Voltar</ButtonEstilizacao>
<ButtonEstilizacao onClick={onSubmit}>Cadastrar </ButtonEstilizacao>
</ContainerBotoes>
</DivInputForm> 
</ContainerForm> 
);
};

export default Register;