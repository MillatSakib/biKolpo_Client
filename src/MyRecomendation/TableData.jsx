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
            <div className="font-bold">Poster Name</div>
            <div className="text-sm opacity-50">Poster Email</div>
          </div>
        </div>
      </td>

      <td>Here contain the Query Title</td>
      <td>
        Product Name
        <br />
        <span className="badge badge-ghost badge-sm">Brand Name</span>
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
      <th>
        <button className="btn btn-error text-base-300 btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default TableData;
