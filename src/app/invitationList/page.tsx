import InvitationListBody from "@/components/invitationListBody/InvitationListBody";
import DesktopInvitationListHeading from "@/components/invitationListHeading/DesktopInvitationListHeading";
import InvitationListHeading from "@/components/invitationListHeading/InvitationListHeading";

const InvitationList = () => {
  return (
    <div className="relative lg:flex ">
      <InvitationListHeading />
      <div className="lg:flex lg:justify-center">
        <div>
          <DesktopInvitationListHeading />
          <InvitationListBody />
        </div>
      </div>
    </div>
  );
};

export default InvitationList;
