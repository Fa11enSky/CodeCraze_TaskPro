import NeedHelpInner from './NeedHelp.styled';

const NeedHelp = () => {
  return (
    <NeedHelpInner>
      <p className="NeedHelpInner__text">Need help</p>
      <form className="NeedHelpInner__form">
        <input
          className="NeedHelpInner__email"
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <textarea
          className="NeedHelpInner__comment"
          id="comment"
          name="comment"
          placeholder="Comment"
        ></textarea>
        <button className="NeedHelpInner__btn" type="submit">
          Send
        </button>
      </form>
    </NeedHelpInner>
  );
};

export default NeedHelp;
