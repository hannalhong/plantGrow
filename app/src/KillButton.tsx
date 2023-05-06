import * as React from "react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import { IIconProps, IContextualMenuProps, Stack, Link } from "@fluentui/react";
import { IconButton } from "@fluentui/react/lib/Button";
import { mergeStyles } from "@fluentui/react";
import { parentPort } from "worker_threads";

export default function KillButton(props: { onKillClicked: () => void }) {
  const killButtonIcon: IIconProps = {
    iconName: "killButtonIcon",
  };

  const styles = {
    root: {
      width: 50,
      height: 50,
    },
    icon: {
      width: 50,
      height: 50,
    },
  };

  return (
    <IconButton
      styles={styles}
      iconProps={killButtonIcon}
      title="Kill Plant"
      onClick={props.onKillClicked}
    />
  );
}
