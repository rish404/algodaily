var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }
    
    if (l1.val > l2.val) {
        [l1, l2] = [l2, l1] // Swap in place
    }
    l1.next = mergeTwoLists(l1.next, l2)
    
    return l1 || l2
};