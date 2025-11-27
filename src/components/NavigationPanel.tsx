import { useNavigate, useLocation } from "react-router";
import svgPaths from "../imports/svg-9eox9whfin";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  top: string;
}

function NavItem({ to, icon, label, top }: NavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div
      className={`absolute h-[40px] left-[20px] overflow-clip rounded-[3px] w-[208px] cursor-pointer ${
        isActive ? "bg-[#ebecf0]" : ""
      }`}
      style={{ top }}
      onClick={() => navigate(to)}
      data-name="Nav Item"
    >
      <p
        className={`absolute h-[40px] leading-[40px] left-[50px] not-italic right-[10px] text-[14px] top-[calc(50%-20px)] ${
          isActive
            ? "font-['Poppins:SemiBold',sans-serif] text-[#059492]"
            : "font-['Poppins:Medium',sans-serif] text-[#42526e]"
        }`}
      >
        {label}
      </p>
      <div className="absolute left-[10px] size-[24px] top-1/2 translate-y-[-50%]">{icon}</div>
      {isActive && (
        <div className="absolute bg-[#059492] h-[40px] left-[-21px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[5px]" />
      )}
    </div>
  );
}

function TiresAndWallsExport() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
      <g id="tires_and_walls_export">
        <path d={svgPaths.p31a41340} fill="currentColor" id="transport,-private,-public,-vehicles,-car,-bus" />
      </g>
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon">
        <path d={svgPaths.p33b54200} fill="currentColor" id="Vector" />
      </g>
    </svg>
  );
}

function OrderIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon">
        <path d={svgPaths.p303c1700} fill="currentColor" id="Vector" />
      </g>
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon">
        <path d={svgPaths.p16656800} fill="currentColor" id="Vector" />
      </g>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="Icon">
        <path d={svgPaths.p20a3c100} fill="currentColor" id="Vector" />
      </g>
    </svg>
  );
}

export function NavigationPanel() {
  const location = useLocation();

  return (
    <div className="fixed bg-white bottom-0 left-0 overflow-clip rounded-br-[5px] top-[56px] w-[260px] z-10" data-name="Nav Panel">
      <NavItem
        to="/dashboard"
        icon={
          <div className={location.pathname === "/dashboard" ? "text-[#059492]" : "text-[#42526e]"}>
            <HomeIcon />
          </div>
        }
        label="Home"
        top="20px"
      />
      <NavItem
        to="/orders"
        icon={
          <div className={location.pathname === "/orders" ? "text-[#059492]" : "text-[#42526e]"}>
            <OrderIcon />
          </div>
        }
        label="Order"
        top="68px"
      />
      <NavItem
        to="/assets"
        icon={
          <div className={location.pathname === "/assets" || location.pathname.startsWith("/asset/") ? "text-[#059492]" : "text-[#42526e]"}>
            <div className="overflow-clip relative size-[24px]">
              <div className="absolute bottom-[13.24%] left-0 right-0 top-[13.24%]">
                <TiresAndWallsExport />
              </div>
            </div>
          </div>
        }
        label="Assets"
        top="116px"
      />
      <NavItem
        to="/payments"
        icon={
          <div className={location.pathname === "/payments" ? "text-[#059492]" : "text-[#42526e]"}>
            <PaymentIcon />
          </div>
        }
        label="Payments"
        top="164px"
      />
      <NavItem
        to="/analytics"
        icon={
          <div className={location.pathname === "/analytics" ? "text-[#059492]" : "text-[#42526e]"}>
            <AnalyticsIcon />
          </div>
        }
        label="Analytics"
        top="212px"
      />
    </div>
  );
}