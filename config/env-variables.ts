export enum EnvLabel {
    appMode = "appMode",
    apiBaseURL = "apiBaseURL",
  }
  
  export default function getEnvironmentVariables(label: EnvLabel): string {
    const runtimeConfig = useRuntimeConfig();
    switch (label) {
      case EnvLabel.appMode:
        return runtimeConfig.public.mode;
      case EnvLabel.apiBaseURL:
        return runtimeConfig.public.apiBaseURL;
      default:
        return "";
    }
  }
  