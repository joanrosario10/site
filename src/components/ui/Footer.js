import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        Created with ❤️ by <span class={classes.footerHover}>Joan rosario</span>{" "}
        in 2023. Copyright &copy; by Joan rosario. Always open to job/freelance
        propositions.
      </div>
    </div>
  );
};
