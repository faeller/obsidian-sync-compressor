import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.obsidiansync.compressor',
  appName: 'ObsidianSync',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Filesystem: {
      iosExtraFileSystems: ['library', 'external'],
      androidExtraFileSystems: ['external', 'external-cache', 'external-files']
    }
  }
};

export default config;