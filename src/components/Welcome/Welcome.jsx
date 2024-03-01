import logoMobile from '../../assets/img/welcome_boy_mobile.png';
import logoMobileRetina from '../../assets/img/welcome_boy_mobile@2x.png';

import logoDeskAndTab from '../../assets/img/welcome_boy_tab-desk.png';
import logoDeskAndTabRetina from '../../assets/img/welcome_boy_tab-desk@2x.png';

const WelcomeInner = () => {
  return (
    <>
      <picture>
        <source
          srcSet={`${logoDeskAndTab}, ${logoDeskAndTabRetina}`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${logoDeskAndTab} , ${logoDeskAndTabRetina}`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoMobile} , ${logoMobileRetina}`}
          media="(max-width: 767px)"
        />
        <img src={logoMobile} alt="Boy with laptop" />
      </picture>

      <div>
        <svg fill="#fff" width="18" height="24" viewBox="0 0 32 32">
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2.6667"
            d="M18.999 2.667h-7.674c-0.239 0-0.359 0-0.465 0.036-0.093 0.032-0.178 0.085-0.249 0.154-0.080 0.078-0.133 0.185-0.24 0.399l-5.6 11.2c-0.256 0.511-0.383 0.767-0.353 0.974 0.027 0.181 0.127 0.344 0.277 0.449 0.172 0.12 0.458 0.12 1.029 0.12h8.274l-4 13.333 16.258-16.86c0.548-0.569 0.823-0.853 0.839-1.097 0.014-0.211-0.073-0.417-0.235-0.553-0.186-0.157-0.581-0.157-1.372-0.157h-9.49l3-8z"
          ></path>
        </svg>
      </div>
      <p>Task Pro</p>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div>
        <a href="#">Registration</a>
        <a href="#">Log In</a>
      </div>
    </>
  );
};

export default WelcomeInner;
