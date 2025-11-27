// This component contains only the content area from OrdersPast (Frame67)
// Extracted to avoid rendering duplicate headers and tabs

export function OrdersPastContentArea() {
  const OrdersPast = require("../../imports/OrdersPast").default;
  
  // Render the imported component in a container positioned to show only content
  return (
    <div className="absolute left-[0px] top-[176px] right-0 bottom-0 overflow-auto pb-[100px]">
      <div className="relative size-full">
        <div style={{ position: 'absolute', top: '-176px', left: 0, right: 0 }}>
          <OrdersPast />
        </div>
      </div>
    </div>
  );
}