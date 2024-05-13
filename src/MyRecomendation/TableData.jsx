import swal from "sweetalert";

const TableData = ({ dependency, setDependency, data }) => {
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "If click delete, you will not be able to recover this data again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://bikolpo.vercel.app/myRecomendation/${data?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const temp = dependency;
            setDependency(!temp);
            swal("Your Data has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Ok, we aren't deleted your Data!");
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={data.queryPhotoUrl}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data.queryUserName}</div>
            <div className="text-sm opacity-50">{data.quryUserEmail}</div>
          </div>
        </div>
      </td>

      <td>{data.queryTitle}</td>
      <td>
        {data.productName}
        <br />
      </td>

      <td className="max-w-[450px] min-w-[300px]">{data.reason}</td>
      <th>
        <button
          onClick={handleDelete}
          className="btn btn-error text-base-300 btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default TableData;
