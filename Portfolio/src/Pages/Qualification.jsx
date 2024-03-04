import React from 'react'

export default function Qualification() {
    return (
        <div>
            <div> Educational History</div>

            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div class="feature col">
                    <div className='card p-2'>
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">10th</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
                <div class="feature col">
                    <div className='card p-2'>
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use xlink:href="#people-circle"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
                <div class="feature col">
                    <div className='card p-2'>
                        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg>
                        </div>
                        <h3 class="fs-2 text-body-emphasis">Featured title</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}