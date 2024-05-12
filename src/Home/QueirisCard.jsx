const QueirisCard = () => {
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">This is Query Title</h2>
          <div>This is brand Name</div>
          <p>This is alternation Reason</p>
          <div className="card-actions justify-between items-center">
            <span>This is Date Posted</span>
            <div className="flex items-end flex-col gap-2">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div>Md Sohan Millat Sakib</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueirisCard;
