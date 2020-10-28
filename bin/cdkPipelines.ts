#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { cdkPipelineStack } from '../lib/cdkPipelineStack';

const app = new App();

new cdkPipelineStack(app, 'cdkPipelienStackCdkpipelinesDemoPipelineStack', {
    env: { account: '832646964096', region: 'us-east-1' },
});

app.synth();