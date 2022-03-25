function CommonBox({ url }) {
  return (
    <div className="CommonBomx">
      <img alt="프로필" className="profileImage" src={url} />
      <div className="describe">
        <span>
          id
          <br className="hour" />
          hour
        </span>
      </div>
    </div>
  );
}

export default CommonBox;
