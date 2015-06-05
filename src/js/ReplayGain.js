function ReplayGain() {
    this.linprebuf = new_float(GainAnalysis.MAX_ORDER * 2);
    /**
     * left input samples, with pre-buffer
     */
    this.linpre = 0;
    this.lstepbuf = new_float(GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER);
    /**
     * left "first step" (i.e. post first filter) samples
     */
    this.lstep = 0;
    this.loutbuf = new_float(GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER);
    /**
     * left "out" (i.e. post second filter) samples
     */
    this.lout = 0;
    this.rinprebuf = new_float(GainAnalysis.MAX_ORDER * 2);
    /**
     * right input samples ...
     */
    this.rinpre = 0;
    this.rstepbuf = new_float(GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER);
    this.rstep = 0;
    this.routbuf = new_float(GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER);
    this.rout = 0;
    /**
     * number of samples required to reach number of milliseconds required
     * for RMS window
     */
    this.sampleWindow = 0;
    this.totsamp = 0;
    this.lsum = 0.;
    this.rsum = 0.;
    this.freqindex = 0;
    this.first = 0;
    this.A = new_int(0 | (GainAnalysis.STEPS_per_dB * GainAnalysis.MAX_dB));
    this.B = new_int(0 | (GainAnalysis.STEPS_per_dB * GainAnalysis.MAX_dB));

}