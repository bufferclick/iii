const { commands } = window.vendetta;

let unregister;

export default {
  onLoad: () => {
    unregister = commands.registerCommand({
      name: "testing",
      description: "Prints a greeting message",
      options: [],
      execute: () => {
        return { content: "hi bufferclick" };
      }
    });
  },
  onUnload: () => {
    if (unregister) unregister();
  }
};
