export const User = ({ eyeColor, name, id }) => {
  return (
    <>
      <div className={'user'}>
        <div>
          <strong>{name}</strong>
          <br />
          <p>Eye color: {eyeColor}</p>
        </div>
        <div className={'eye'}>
          <div style={{ background: eyeColor }} className={'cornea'}></div>
          <div className={'pupil'}></div>
        </div>
      </div>
      <style jsx>{`
        .user {
          display: flex;
          justify-content: space-between;
          width: 30%;
          border: 1px solid;
          padding: 20px;
        }
        .eye {
          position: relative;
          border: 1px solid;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          margin-left: 20px;
        }
        .cornea {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          width 55px;
          height: 55px;
        }
        .pupil {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background: black;
        }
      `}</style>
    </>
  )
}
