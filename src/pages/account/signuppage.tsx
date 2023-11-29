import { SubmitHandler, useForm } from "react-hook-form";
import { ISignInFormInput, ISignUpFormInput } from "../../types/account";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<ISignUpFormInput>();
  const onSubmit: SubmitHandler<ISignInFormInput> = (data) => console.log(data);
  /**
   * 11/29 ...register('***', {pattern:{value : --정규식-- } }) 으로 이메일 , 비밀번호등 정규식으로 필터링
   */
  return (
    <div className="signup_wrap">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="signup_form">
        <div>
          <p className="text">계정</p>
          <input
            type="text"
            {...register("account", {
              required: true,
              minLength: {
                value: 6,
                message: "6글자 이상 입력해주세요.",
              },
            })}
          />
        </div>
        <div>
          <p className="text">비밀번호</p>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 5,
                message: "5글자 이상 입력해주세요.",
              },
            })}
          />
        </div>
        <div>
          <p className="text">비밀번호 확인</p>
          <input
            type="password"
            {...register("repassword", {
              required: true,
              minLength: {
                value: 5,
                message: "5글자 이상 입력해주세요.",
              },
            })}
          />
        </div>
        <div>
          <p className="text">이름</p>
          <input
            type="text"
            {...register("name", {
              required: false,
              minLength: {
                value: 4,
                message: "4글자 이상 입력해주세요.",
              },
            })}
          />
        </div>
        <div>
          <p className="text">이메일</p>
          <input
            type="text"
            {...register("email", {
              required: false,
              minLength: {
                value: 8,
                message: "8글자 이상 입력해주세요.",
              },
            })}
          />
        </div>
        {/* 11/29 오류 발생 
                input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`
                button -> input으로 바꾸면서 나온 에러인데 input은 자식을 가질수없는 태그라 발생한 오류였다.
                안의 내용을 없애고 value로 표시 
            */}
        <input type="submit" className="signup_btn" value="SignUp" />
      </form>
    </div>
  );
};

export default SignUpPage;
