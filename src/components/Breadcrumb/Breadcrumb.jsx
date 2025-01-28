import s from "./Breadcrumb.module.scss";

export const Breadcrumb = ({ destination }) => {
  return (
    <div className={s.BreadcrumbStyling}>
      <p>Hotel Overlook &gt; Hoteller & Destinationer &gt; {destination}</p>
    </div>
  );
};
