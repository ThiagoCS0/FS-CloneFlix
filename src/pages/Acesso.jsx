import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ImgInvalido from '/invalido.png'
export default function Acesso() {
  useEffect(() => { document.title = "Cloneflix"; }, [])
  const [email, defEmail] = useState(''); const [senha, defSenha] = useState('');
  const [validarEmail, defValidarEmail] = useState(true); const [validarSenha, defValidarSenha] = useState(true);
  const [emailInvalido, defEmailInvalido] = useState(false); const [senhaInvalido, defSenhaInvalida] = useState(false);

  const Checagem = () => {
    if (email.length > 0) {
      if (/\S+@\S+\.\S+/.test(email)) {
        defValidarEmail(true); defEmailInvalido(false);
      } else { defValidarEmail(false); defEmailInvalido(true); }
    } else { defEmailInvalido(false); }
    if (senha.length > 0) {
      if (senha.length > 3 && senha.length < 61) {
        defValidarSenha(true); defSenhaInvalida(false);
      } else { defValidarSenha(false); defSenhaInvalida(true); }
    } else { defSenhaInvalida(false); }
  }

  const Enviar = (e) => {
    e.preventDefault();
    if (validarEmail && validarSenha) { defEmail(''); defSenha(''); /* VALIDO */ }
  }

  return (
    <>
      <div id="acesso">
        <h1>Entrar</h1>
        <form onSubmit={Enviar}>
          <input style={{ borderColor: !emailInvalido ? '#444' : '#a00' }} type="text" value={email} onChange={e => { defEmail(e.target.value); }} onKeyUp={Checagem} name="email" autoComplete="email" required placeholder="Email ou número de celular" />{emailInvalido && <p className="pAviso">
            <img width="16px" height="16px" src={ImgInvalido} alt=" " />
            Informe um email ou número de telefone válido.</p>}
          <input style={{ borderColor: !senhaInvalido ? '#444' : '#a00' }} type="password" value={senha} onChange={e => { defSenha(e.target.value); }} onKeyUp={Checagem} name="password" autoComplete="password" required placeholder="Senha" />{senhaInvalido && <p className="pAviso">
            <img width="16px" height="16px" src={ImgInvalido} alt=" " />
            A senha deve ter entre 4 e 60 caracteres.</p>}
          <button id="bEntrar" type="submit">Entrar</button>
        </form>
        <p>OU</p>
        <button>Usar um código de acesso</button>
        <Link className="links" to="/" style={{ marginBottom: '10px' }}>Esqueceu a senha?</Link>
        <div id="dAcessoInferior">
          <label><input id="iLembrar" type="checkbox" /> <span className="checador"></span> Lembre-se de mim</label>
          <p style={{ textAlign: "left" }}>Novo por aqui? <Link className="links">Assine agora</Link>.</p>
          <p class="pCap">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
          <p id="pCap2" style={{ visibility: 'hidden' }} class="pCap">As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="#">Política de Privacidade</a> e <a href="#">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
        </div>
      </div>
    </>
  )
}