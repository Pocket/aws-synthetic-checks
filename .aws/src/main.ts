import { Construct } from 'constructs';
import { App, RemoteBackend, TerraformStack } from 'cdktf';
import { AwsProvider } from '@cdktf/provider-aws/lib/provider';
import { S3Bucket } from '@cdktf/provider-aws/lib/s3-bucket';
import { config } from './config';
import { LocalProvider } from '@cdktf/provider-local/lib/provider';
import { ArchiveProvider } from '@cdktf/provider-archive/lib/provider';
import { NullProvider } from '@cdktf/provider-null/lib/provider';

class SyntheticChecks extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'aws', { region: 'us-east-1' });
    new LocalProvider(this, 'local_provider');
    new ArchiveProvider(this, 'archive_provider');
    new NullProvider(this, 'null_provider');

    new RemoteBackend(this, {
      hostname: 'app.terraform.io',
      organization: 'Pocket',
      workspaces: [{ prefix: `${config.name}-` }],
    });

    this.createSyntheticChecksZippedCodeBucket();
  }

  /**
   * Create the synthetic checks zipped code S3 bucket
   * This bucket is used to store the zipped synthetics code (all dependencies included)
   * @private
   */
  private createSyntheticChecksZippedCodeBucket() {
    return new S3Bucket(this, 'aws-synthetic-checks-s3-bucket', {
      bucket: `pocket-${config.prefix.toLowerCase()}`,
      tags: config.tags,
    });
  }
}

const app = new App();
new SyntheticChecks(app, config.domainPrefix);
app.synth();
