from tests.util import match_object_snapshot
from tests.analyzer.util import analyze

input = """
list:
- value
-    value
    - value
    -    value
- value
""".strip()

def test_list_item_analysis():
    analysis = analyze(input)

    assert match_object_snapshot(analysis, 'tests/analyzer/snapshots/list_item_analysis.snap.yaml')
