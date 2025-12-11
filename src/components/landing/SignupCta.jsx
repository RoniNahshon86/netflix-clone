import React from "react";
import ArrowRightNarrow from "../../assets/icons/ArrowRightNarrow.svg?react";

import Button from "../ui/Button";
import TextField from "../ui/TextField";

const SignupCta = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="flex justify-center gap-2">
        {/* TODO: Form functionality and custom msg */}
        <TextField type="email" placeholder="Email address" />
        <Button size="md">
          <span>get started</span>
          <ArrowRightNarrow className="h-4" />
        </Button>
      </form>
    </div>
  );
};

export default SignupCta;
