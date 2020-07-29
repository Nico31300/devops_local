@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    stage('build') {
        mtaBuild script: this
    }
    // This attaches the deployable to a transport request,
    // if you have a prior call to mtaBuild, this step sets the deployable
    stage('attach') {
        steps {
            transportRequestUploadFile script: this,
                                       transportRequestId: 'DFEK911357' // This can be omitted if present inside a Git commit message
        }
    }
}
