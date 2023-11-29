import "../../styles/accountpage.css";

/**
 * 11/28 원래는 로그인 , 회원가입에 쓸 form을 state를 여러개 만들어 하나씩 다 제어했는데
 * 이번엔 react-hook-form을 사용해보려한다
 * ref https://react-hook-form.com/docs
 */
const SignInPage = () => {
  return (
    <div className="signin_wrap">
      <h1>Login</h1>
      <form action="" className="signin_form">
        <div>
          <p className="text">계정</p>
          <input type="text"  placeholder=""/>
        </div>
        <div>
          <p className="text">비밀번호</p>
          <input type="password"  placeholder=""/>
        </div>
        <input type="submit" className="signin_btn" value="Login"/>

      </form>
    </div>
  );
};

export default SignInPage;
