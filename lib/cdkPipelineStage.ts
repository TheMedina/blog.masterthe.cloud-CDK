import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { cdkPipelineStack } from './cdkPipelineStack';

/**
 * Deployable unit of web service app
 */
export class cdkPipelineStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new cdkPipelineStack(this, 'WebService');

        // Expose cdkPipelineStack output one level higher
        this.urlOutput = service.urlOutput;
    }
}