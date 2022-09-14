import React, { Component } from "react";
import { convertFromHTML, ContentState, EditorState } from "draft-js";
import Editor from "@draft-js-plugins/editor";
import createToolbarPlugin from "@draft-js-plugins/static-toolbar";
import { UnorderedListButton, OrderedListButton } from "@draft-js-plugins/buttons";
import { Grid, Box, InputLabel } from "@mui/material";

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];

const styles = {
  editor: (theme) => ({
    boxSizing: "content-box",
    lineHeight: theme.sizing(30),
    fontSize: theme.typography.subtitle2.fontSize,
    borderWidth: theme.sizing(1.55),
    borderStyle: "solid",
    borderColor: "#0000003b",
    borderRadius: theme.sizing(10),
    cursor: "text",
    color: theme.palette.common.black,
    padding: theme.sizing(15),
    marginBottom: theme.spacing(3),
    background: theme.palette.background.paper,
    "&:hover": {
      borderColor: theme.palette.text.primary
    }
  }),
  editorFocused: (theme) => ({
    borderColor: theme.palette.primary.main,
    "&:hover": {
      borderColor: theme.palette.primary.main
    }
  }),
  box: (theme) => ({
    display: "flex",
    marginBottom: theme.sizing(10)
  })
};

class CustomToolbarEditor extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    const blocksFromHTML = convertFromHTML(value || "");
    const content = ContentState.createFromBlockArray(blocksFromHTML);
    const state = EditorState.createWithContent(content);
    this.state = {
      editorState: state,
      focus: false
    };
  }

  onChange = (state) => {
    const { onChange } = this.props;
    onChange(state);
    this.setState({
      editorState: state
    });
  };

  render() {
    const { editorState, focus } = this.state;
    const { label } = this.props;

    return (
      <Grid>
        <InputLabel>{label}</InputLabel>
        <Grid
          sx={[styles.editor, focus && styles.editorFocused]}
          onClick={() => this.editor.focus()}>
          <Toolbar>
            {(externalProps) => (
              <Box sx={styles.box}>
                <OrderedListButton {...externalProps} />
                <Grid ml={2}>
                  <UnorderedListButton {...externalProps} />
                </Grid>
              </Box>
            )}
          </Toolbar>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default CustomToolbarEditor;
