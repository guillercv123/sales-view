import React from "react";
import { ChildItem } from "@/constants/Sidebaritems";
import { SidebarItem} from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router";



interface NavItemsProps {
    item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <SidebarItem
            href={item.url}
            className={`${
                item.url === pathname
                    ? "text-white bg-primary rounded-xl shadow-btnshdw"
                    : "text-link bg-transparent group/link"
            }`}
        >
        <span className="flex gap-3 align-center items-center">
          {item.icon ? (
              <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
              <span
                  className={`${
                      item.url == pathname
                          ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                          : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
                  } `}
              ></span>
          )}
            <span
                className={`max-w-36 overflow-hidden`}
            >
            {item.name}
          </span>
        </span>
        </SidebarItem>
    );
};

export default NavItems;
