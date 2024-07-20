import NavBarListItem from "../NavBarListItem";
import { MdAutoAwesomeMosaic,MdAllInbox,MdListAlt,MdFireTruck ,MdWysiwyg,MdPeopleAlt,MdBarChart  } from "react-icons/md";

const NavBarList = () => {
  const listItemData = [
    {
      icon: <MdAutoAwesomeMosaic />,
      listItemText: "Dashboard",
      link: "/",
    },
    {
      icon: <MdAllInbox />,
      listItemText: "Inventory",
      link: "/inventory",
    },
    {
      icon: <MdListAlt />,
      listItemText: "Purchase Orders",
      link: "/purchaseorder",
    },
    {
      icon:<MdWysiwyg />,
      listItemText: "Sales Orders",
      link: "/salesorder",
    },
    {
      icon: <MdFireTruck />,
      listItemText: "Suppliers",
      link: "/suppliers",
    },
    {
      icon:<MdPeopleAlt />,
      listItemText: "Customers",
      link: "/customers",
    },
    {
      icon:<MdBarChart/>,
      listItemText: "Reports",
      link: "/report",
    },
  ];

  return (
    <div className="navbar-container__list">
      <ul>
        {listItemData.map((item, index) => {
          return (
            <NavBarListItem
              key={index}
              icon={item.icon}
              text={item.listItemText}
              link={item.link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default NavBarList;
