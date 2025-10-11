import {
  BarChart2,
  CheckSquare,
  Flag,
  Home,
  Layers,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  Users,
} from 'lucide-react';

const NavItem = ({ icon: Icon, text, active = false }: { icon: React.ElementType, text: string, active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
      active
        ? 'bg-primary-50 text-primary-700'
        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }`}
  >
    <Icon className="mr-3 h-5 w-5" />
    <span>{text}</span>
  </a>
);

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col w-72 border-r border-gray-200 bg-white">
      <div className="px-4 py-6 flex items-center space-x-3">
         <svg className="h-8 w-auto" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM12.4382 9.01341C12.2386 8.52877 11.7614 8.52877 11.5618 9.01341L8 18L16 14L24 18L20.4382 9.01341C20.2386 8.52877 19.7614 8.52877 19.5618 9.01341L16 16L12.4382 9.01341Z" fill="#F2F4F7"/><path d="M16 16L12.4382 9.01341C12.2386 8.52877 11.7614 8.52877 11.5618 9.01341L8 18L16 14" fill="#D0D5DD"/><path d="M16 16L19.5618 9.01341C19.7614 8.52877 20.2386 8.52877 20.4382 9.01341L24 18L16 14" fill="#E4E7EC"/></svg>
        <span className="text-xl font-semibold text-gray-800">Untitled UI</span>
      </div>
      
      <div className="flex-1 flex flex-col pt-2 pb-4 overflow-y-auto">
        <div className="px-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-600 focus:border-primary-600"
            />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={Home} text="Home" />
          <NavItem icon={BarChart2} text="Dashboard" active />
          <NavItem icon={Layers} text="Projects" />
          <NavItem icon={CheckSquare} text="Tasks" />
          <NavItem icon={Flag} text="Reporting" />
          <NavItem icon={Users} text="Users" />
        </nav>

        <div className="px-4 mt-auto">
          <nav className="space-y-1">
            <NavItem icon={LifeBuoy} text="Support" />
            <NavItem icon={Settings} text="Settings" />
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.pravatar.cc/40?u=olivia"
            alt="Olivia Rhye"
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-gray-900">Olivia Rhye</p>
            <p className="text-sm text-gray-600">olivia@untitledui.com</p>
          </div>
          <LogOut className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
