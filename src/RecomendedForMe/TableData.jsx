const TableData = ({ data }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={data.recomender_profileImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data.recomenderName}</div>
            <div className="text-sm opacity-50">{data.recommernderEmail}</div>
          </div>
        </div>
      </td>

      <td>{data.queryTitle}</td>
      <td>{data.title}</td>
      <td>
        <div>{data.productName}</div>
        <div>
          {" "}
          <img
            src={data.productImage}
            className="w-[200px] rounded-lg my-2"
            alt=""
          />
        </div>
      </td>

      <td className="max-w-[450px] min-w-[300px]">{data.reason}</td>
    </tr>
  );
};

export default TableData;
