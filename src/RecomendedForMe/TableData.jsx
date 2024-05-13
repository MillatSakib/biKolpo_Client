const TableData = () => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Recomander Name</div>
            <div className="text-sm opacity-50">Recomander Email</div>
          </div>
        </div>
      </td>

      <td>Here contain the Query Title</td>
      <td>Recomendation title are here.</td>
      <td>
        <div>Product Name</div>
        <div>
          {" "}
          <img
            src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?w=996&t=st=1715574954~exp=1715575554~hmac=1d5dffa402209385d11f0e727f7ae2ce06215ff1641336831a454a948f19e950"
            className="w-[200px] rounded-lg my-2"
            alt=""
          />
        </div>
      </td>

      <td className="max-w-[450px] min-w-[300px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        necessitatibus, odio omnis porro excepturi illum perferendis quam
        corporis distinctio similique quae perspiciatis velit corrupti ipsum
        sequi. Commodi voluptatibus laborum consequuntur libero suscipit,
        sapiente, molestiae minima sequi incidunt tempora magni. Nulla quisquam
        ducimus laboriosam maiores cupiditate iure voluptatum blanditiis quaerat
        consequuntur.
      </td>
    </tr>
  );
};

export default TableData;
