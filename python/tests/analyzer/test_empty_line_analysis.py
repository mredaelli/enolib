from tests.util import match_object_snapshot
from tests.analyzer.util import analyze

input = ('\n'
         ' \n'
         '  \n'
         '   \n'
         '\n'
         ' \n'
         '  \n'
         '   \n')

def test_empty_line_analysis():
    analysis = analyze(input)

    assert match_object_snapshot(analysis, 'tests/analyzer/snapshots/empty_line_analysis.snap.yaml')
