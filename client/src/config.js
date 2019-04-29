switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
    var s3region            = 'us-west-2'
    var s3rootfolder        = 'dbg-sw'

    var state_machine_arn   = "arn:aws:states:us-west-2:671128851199:stateMachine:dbg-atac-seq-state-machine-us-west-2-dev"

    var endpoints = {
      s3bucketroot:        `https://s3.${s3region}.amazonaws.com`,
      s3bucket:            `https://s3.${s3region}.amazonaws.com/${s3rootfolder}`,
      executeworkflow:     'https://98uhh41gmi.execute-api.us-west-2.amazonaws.com/manage-step-execute-dev/execute',
      status:              'https://ra0r2xo907.execute-api.us-west-2.amazonaws.com/manage-status-dev/status',
      signedurl:           'https://qfk284ove8.execute-api.us-west-2.amazonaws.com/gets3signedurl-dev/import',
    }
    break;
  default:
    //all other env
    var s3region            = 'us-west-2'
    var s3rootfolder        = 'dbg-sw'

    var state_machine_arn   = "arn:aws:states:us-west-2:671128851199:stateMachine:dbg-atac-seq-state-machine-us-west-2-dev"

    var endpoints = {
      s3bucketroot:        `https://s3.${s3region}.amazonaws.com`,
      s3bucket:            `https://s3.${s3region}.amazonaws.com/${s3rootfolder}`,
      executeworkflow:     'https://98uhh41gmi.execute-api.us-west-2.amazonaws.com/manage-step-execute-dev/execute',
      status:              'https://ra0r2xo907.execute-api.us-west-2.amazonaws.com/manage-status-dev/status',
      signedurl:           'https://qfk284ove8.execute-api.us-west-2.amazonaws.com/gets3signedurl-dev/import',

    }
}

export const S3REGION = s3region;
export const S3ROOTFOLDER = s3rootfolder;
export const STATE_MACHINE_ARN = state_machine_arn;

export const ENDPOINTS = {
  s3BucketRoot:        endpoints['s3bucketroot'],
  s3Bucket:            endpoints['s3bucket'],
  executeWorkflow:     endpoints['executeworkflow'],
  status:              endpoints['status'],
  signedUrl:           endpoints['signedurl'],
};
